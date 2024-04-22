const CopyToClipboard = async (str: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(str);
  } catch (err) {}
};

export default CopyToClipboard;
