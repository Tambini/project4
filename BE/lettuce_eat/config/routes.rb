Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :recipes do
    resources :categories
  end


post 'auth/login', to: 'authentication#authenticate'
post 'register', to: 'users#create'
end
