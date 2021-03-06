Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/signin', to: 'users#signin'
  namespace :api do
    namespace :v1 do
      resources :drugs
      resources :pharmacies
      resources :drug_pharmacies
    end
  end

end