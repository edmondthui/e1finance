class Api::StocksController < ApplicationController

    def index
        @holdings = Holding.includes(:stock).where(pie_id: params[:stock][:pie_id])
        render :index
    end

    private

    def stock_params
        params.require(:stock).permit(:ticker, :name, :pie_id)
    end
    
end