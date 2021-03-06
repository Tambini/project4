Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :categories do
    resources :recipes
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'register', to: 'users#create'

  get 'recipes', to: 'recipes#all_recipes'
  get 'user/recipes', to: 'recipes#personal_recipes'


end
