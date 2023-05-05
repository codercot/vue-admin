import service from '@/utils/request.js'

// 品牌管理管理
export const reqTradeMarkList = (page, limit) => service({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: "get" })

// 添加商品&&删除商品
export const reqAddorUploadTradeMark = (trade) => {
  if (trade.id) {
    return service({ url: "" })
  } else {
    return service({ url: "/admin/product/baseTrademark/save", method: 'post', data: trade })
  }
}