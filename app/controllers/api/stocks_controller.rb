class Api::StocksController < ApplicationController

    def index
        @pie = Pie.where(id: params[:stock][:pie_id])
        @holdings = @pie.holdings
        @stocks = @pie.stocks
        render :index
    end

    private

    def stock_params
        params.require(:stock).permit(:ticker:, :name, :pie_id)
    end
    
end