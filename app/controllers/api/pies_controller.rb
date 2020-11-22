class Api::PiesController < ApplicationController

    def index
        @pies = Pie.where(portfolio_id: params[:pie][:portfolio_id])
        render :index
    end

    def create
        @pie = Pie.new(pie_params)
        if @pie.save
            render :show
        else
            render json: @pie.errors.full_messages
        end
    end

    def destroy
        @pie = current_user.pies.find(params[:id])
        if @pie.destroy
            render :show
        else
            render json: ["Error, you weren't supposed to do that."], status: 404
        end
    end

    private

    def pie_params
        params.require(:pie).permit(:pie_name, :portfolio_id)
    end
    
end