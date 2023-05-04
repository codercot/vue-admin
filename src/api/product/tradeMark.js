import service from '@/utils/request.js'

// 品牌管理管理
export const reqTradeMarkList = (page,limit)=>service({url:`/admin/product/baseTrademark/${page}/${limit}`,method:"get"})