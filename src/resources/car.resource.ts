const carResource = {
  properties: {
    s3Key: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      }
    },
    bucket: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      }
    },
    mime: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      }
    },
    createAt: {
      isDisabled: true,
      isVisible: {
        list: false,
      }
    },
    updatedAt: {
      isDisabled: true,
      isVisible: {
        list: false,
      }
    },
    price: "currency",
    auctionViews: "currency",
    watching: "currency",
    description: "textarea",
    subTitle: { isTitle: true }
  },
}

export default carResource;
