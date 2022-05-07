const Blog =require('../models/Blog')
const BaseService=require('./BaseService')

class BlogService extends BaseService {
  async queryWithPopAndSort(obj,sort) {
    return this.model.find(obj).sort({createdAt:sort}).populate({
      path:"categoryId",
      model:"Category"
  }).exec()
  }  
  
  }
  
  module.exports = new BlogService(Blog)