class UsersController < ApplicationController
    def signin
        user = User.find_by(username: params[:username])

        if user && user.authentication (params[:password])
            render json: user
        else
            redner json: {error: "Username/password compination is not valid!"}, status: 401
        end 
    end
end
