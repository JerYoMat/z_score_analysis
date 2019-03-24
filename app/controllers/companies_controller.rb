class CompaniesController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Companies.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end