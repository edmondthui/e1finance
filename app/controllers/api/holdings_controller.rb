class Api::StocksController < ApplicationController

    def show
        @holding = Holding.find(params[:id])
        render :show
    end
    
end