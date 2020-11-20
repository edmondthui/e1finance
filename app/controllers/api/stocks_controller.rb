class Api::StocksController < ApplicationController

    def index
        # @holdings = params[:stock][:pie_id] ? Holding.includes(:stock).where(pie_id: params[:stock][:pie_id]) : Stock.all
        if params[:stock]
            @holdings = Holding.includes(:stock).where(pie_id: params[:stock][:pie_id])
        else
            @stocks = Stock.all
        end
        render :index
    end

    def show
        @stock = Stock.find(params[:id])
        render :show
    end

    private

    def stock_params
        params.require(:stock).permit(:id, :ticker, :name, :pie_id)
    end
    
end