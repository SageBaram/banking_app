export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session")
    await account.deleteSession("current")
  } catch (error) {
    return null;
  }
}
