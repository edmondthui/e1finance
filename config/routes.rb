Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :pies, only: [:index, :create]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :portfolios, only: [:index, :create, :show]
    resources :holdings, only: [:show]
    resources :stocks, only: [:index, :show]
  end
end
