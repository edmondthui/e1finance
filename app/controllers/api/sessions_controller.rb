class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email].downcase,
            params[:user][:password]
        )
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Incorrect email or password. Please try again."], status: 401
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ["Please sign in."], status: 404
        end
    end
end