Rails.application.routes.draw do
  resources :memberships, only: :create
  resources :gyms, except: :create
  resources :clients, except: [:create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
