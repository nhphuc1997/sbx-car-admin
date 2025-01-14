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
