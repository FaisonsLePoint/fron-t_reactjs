export const createAntdKeys = (dataArray) => {
    return dataArray.map((data) => {
      const { id, ...otherProps } = data;
      data = { key: id, ...otherProps };
      return data;
    });
  };