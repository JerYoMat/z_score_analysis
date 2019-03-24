Rails.application.routes.draw do
  scope '/api' do
    get :companies, to: 'companies#index'
  end
end
