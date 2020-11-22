class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.email = @user.email.downcase
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        @user.buying_power += params[:user][:buying_power].to_i
        if @user.buying_power >= 0
            @user.save
            render :show
        else
            render json: ["Not enough buying power"], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:id, :email, :password, :buying_power)
    end

end