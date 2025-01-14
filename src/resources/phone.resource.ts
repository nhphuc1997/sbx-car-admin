const phoneResource = {
  properties: {
    categoryName: {
      availableValues: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Samsung', value: 'Samsung' },
        { label: 'Oppo', value: 'Oppo' },
        { label: 'Xiaomi', value: 'Xiaomi' },
        { label: 'Vivo', value: 'Vivo' },
        { label: 'Honor', value: 'Honor' },
        { label: 'Realme', value: 'Realme' },
      ],
    },
    color: {
      availableValues: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Black', value: 'black' },
        { label: 'Another', value: 'another' },
      ],
    },
    s3Key: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      },
    },
    bucket: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      },
    },
    mime: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      },
    },
  },
};

export default phoneResource;
