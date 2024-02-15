export const requestHandler = async (api, onSuccess, onError, setIsLoading) => {
  setIsLoading && setIsLoading(true);
  try {
    const response = await api();
    if (response.data) {
      onSuccess && onSuccess(response.data);
    } else {
      throw new Error("Failed to fetch Api");
    }
  } catch (error) {
    onError && onError(error || "Something Went Wrong...");
  } finally {
    setIsLoading && setIsLoading(false);
  }
};
