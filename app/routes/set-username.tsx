import { redirect, type ActionFunctionArgs } from '@remix-run/cloudflare'
import { Form, useActionData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { ACCESS_AUTHENTICATED_USER_EMAIL_HEADER } from '~/utils/constants'
import { setUsername } from '~/utils/getUsername.server'

const allowedUsers: any = [
	{ email: "fenil@codersboutique.com", password: "fenil123" },
	{ email: "kaustubh@codersboutique.com", password: "fenil123" },
]

export const action = async ({ request }: ActionFunctionArgs) => {
	const url = new URL(request.url)
	const returnUrl = url.searchParams.get('return-url') ?? '/'
	const accessUsername = request.headers.get(
		ACCESS_AUTHENTICATED_USER_EMAIL_HEADER
	)
	if (accessUsername) throw redirect(returnUrl)
	const { username, email, password } = Object.fromEntries(await request.formData())
	invariant(typeof username === 'string')
	invariant(typeof email === "string")
	invariant(typeof password === "string")
	const isAllowed = allowedUsers.some((user: any) => user.email === email && user.password === password)
	if (!isAllowed) {
		// Handle invalid credentials (you might want to return an error or redirect)
		return { error: "Invalid email or password" }
	}
	return setUsername(username, request, returnUrl)
}

export default function SetUsername() {
	const actionData = useActionData<typeof action>()

	return (
		<div className="grid h-full gap-4 place-content-center w-full">
			<h1 className="text-3xl font-bold">Dating App</h1>
			{actionData?.error && (
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
					<strong className="font-bold">Error: </strong>
					<span className="block sm:inline">{actionData.error}</span>
				</div>
			)}
			<Form className="flex flex-col items-start gap-4 w-full" method="post">
				<div className="grid gap-3">
					<label htmlFor="username">Enter your display name</label>
					<Input
						autoComplete="off"
						autoFocus
						required
						type="text"
						id="username"
						name="username"
					/>
				</div>
				<div className="grid gap-3">
					<label htmlFor="email">Email</label>
					<Input required type="email" id="email" name="email" />
				</div>
				<div className="grid gap-3">
					<label htmlFor="password">Password</label>
					<Input required type="password" id="password" name="password" />
				</div>
				<Button className="text-xs" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}
