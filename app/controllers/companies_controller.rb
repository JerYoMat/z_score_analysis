class CompaniesController < ApplicationController
  def search
    q = params[:q]
    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Company.where(["companyname LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
  
  def index 
    @companies = Company.all 
    render json: @companies
  end 

end