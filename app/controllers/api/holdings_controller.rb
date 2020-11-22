class Api::HoldingsController < ApplicationController

    def show
        @holding = Holding.find(params[:id])
        render :show
    end

    def create
        @holding = Holding.new(holding_params)
        if @holding.save
            render :show
        else
            render json: @holding.errors.full_messages
        end
    end

    def destroy
        @holding = current_user.holdings.find(params[:id])
        if @holding.destroy
            render :show
        else
            render json: ["Error, you weren't supposed to do that"], status: 404
        end
    end

    def update
        @holding = current_user.holdings.find(params[:id])
        @holding.quantity += params[:holding][:quantity].to_i
        if @holding.save
            render :show
        else
            render json: ["Something went wrong please try again"], status: 422
        end
    end

    private

    def holding_params
        params.require(:holding).permit(:id, :quantity, :user_id, :stock_id, :pie_id)
    end

end