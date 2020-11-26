Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :pies, only: [:index, :create, :destroy]
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :portfolios, only: [:index, :create, :show, :destroy]
    resources :holdings, only: [:show, :create, :destroy, :update]
    resources :stocks, only: [:index, :show, :update, :create]
    resources :activities, only: [:index, :create]
  end
end
