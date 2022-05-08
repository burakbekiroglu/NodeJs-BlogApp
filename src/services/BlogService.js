const Blog =require('../models/Blog')
const BaseService=require('./BaseService')

class BlogService extends BaseService {
  async queryWithPopAndSort(obj,sort,limit) {
    return this.model.find(obj).limit(limit).sort({createdAt:sort}).populate({
      path:"categoryId",
      model:"Category"
  }).exec()
  }  
  
  }
  
  module.exports = new BlogService(Blog)