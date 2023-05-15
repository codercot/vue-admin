import request from "@/utils/request";

// 一级分类 /admin/product/getCategory1
export const reqCategory1List = () => request({ url: '/admin/product/getCategory1', method: "get" })

// 二级分类 /admin/product/getCategory2/{category1Id}
export const reqCategory2List = (category1id) => request({ url: `/admin/product/getCategory2/${category1id}`, method: "get" })

// 三级分类 /admin/product/getCategory3/{category2Id}

export const reqCategory3List = (category2id) => request({ url: `/admin/product/getCategory3/${category2id}`, method: "get" })

// 根据1，2，3id获取属性列表 /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
export const reqAttrList = (category1Id, category2Id, category3Id) =>
  request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: "get" })

// 添加商品属性 /admin/product/saveAttrInfo 
export const reqAttrInfo = (data) => request({ url: `/admin/product/saveAttrInfo`, method: "post", data })

// 删除商品属性 /admin/product/deleteAttr/{attrId}
export const reqDeleteAttr = (attrId) => request({ url: `/admin/product/deleteAttr/${attrId}`, method: 'delete' })
