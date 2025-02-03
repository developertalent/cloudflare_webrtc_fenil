import {
  useQuery
} from "/build/_shared/chunk-AOZMQ3IW.js";
import {
  useOutletContext
} from "/build/_shared/chunk-Y3MLNSQL.js";
import {
  createHotContext
} from "/build/_shared/chunk-WTR6QT5M.js";

// app/hooks/useUserMetadata.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useUserMetadata.ts"
  );
  import.meta.hot.lastModified = "1738073419118.2183";
}
function useUserMetadata(email) {
  const { userDirectoryUrl } = useOutletContext();
  const search = new URLSearchParams({ email });
  const key = `${userDirectoryUrl}?${search}`;
  const initialData = {
    displayName: email
  };
  return useQuery({
    initialData,
    queryKey: [key],
    queryFn: async ({ queryKey: [key2] }) => {
      if (userDirectoryUrl === void 0) return Promise.resolve(initialData);
      const response = await fetch(key2, { credentials: "include" });
      if (response.headers.get("Content-Type")?.startsWith("application/json")) {
        const parsedData = await response.json();
        return {
          ...parsedData,
          displayName: `${parsedData.firstName} ${parsedData.lastName}`
        };
      }
      return initialData;
    }
  });
}

export {
  useUserMetadata
};
//# sourceMappingURL=/build/_shared/chunk-SV26IYKJ.js.map
