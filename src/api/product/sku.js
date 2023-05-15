import request from '@/utils/request'

// 获取sku列表数据 /admin/product/list/{page}/{limit}
export const reqSkuList = (page, limit) => request({ url: `/admin/product/list/${page}/${limit}`, method: "get" })

// 商品上架  /admin/product/onSale/{skuId}
export const reqSkuListOnSale = (skuId) => request({ url: `/admin/product/onSale/${skuId}`, method: "get" })

// 商品下架 /admin/product/cancelSale/{skuId}
export const reqSkuCancelSale = (skuId) => request({ url: `/admin/product/cancelSale/${skuId}`, method: "get" })