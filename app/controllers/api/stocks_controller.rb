class Api::StocksController < ApplicationController

    def index
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

    def update
        @stock = Stock.find(params[:id])
        @stock.price = params[:stock][:price].to_f.round(2)
        if @stock.save
            render :show
        else
            render json: ["Something went wrong please try again."], status: 422
        end
    end

    def create
        @stock = Stock.new(stock_params)
        if @stock.save
            render :show
        else
            render json: ["Not valid ticker please try again."], status: 401
        end
    end

    private

    def stock_params
        params.require(:stock).permit(:id, :ticker, :name, :pie_id, :price)
    end
    
end