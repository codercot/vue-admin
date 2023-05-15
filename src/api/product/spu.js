import  service  from '@/utils/request.js'

//获取sup列表 /admin/product/{page}/{limit} 
export const reqSpuList = (page, limit,id) => service({ url: `/admin/product/${page}/${limit}`, methods: "get" ,params:{id}})