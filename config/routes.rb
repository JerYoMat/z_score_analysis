Rails.application.routes.draw do
  scope '/api' do
    get :companies, to: 'companies#search' 
    get '/list', to: 'companies#index'
  end
end
