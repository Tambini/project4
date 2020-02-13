Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :recipes
  resources :categories

post 'auth/login', to: 'authentication#authenticate'
post 'register', to: 'users#create'

  get 'personal/recipes', to: 'recipes#private_index'
end
