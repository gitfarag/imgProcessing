const entryValidate = async (
  width: string,
  height: string
): Promise<string> => {
  const parsewidth = parseInt(width);
  const parseheight = parseInt(height);
  if (isNaN(parsewidth) || parsewidth < 0) return 'invalid width entry';
  else if (isNaN(parseheight) || parseheight < 0) {
    return 'invalid height entry';
  } else {
    return 'good entry';
  }
};
export default entryValidate;
