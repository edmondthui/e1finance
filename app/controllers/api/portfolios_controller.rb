class Api::PortfoliosController < ApplicationController

    def index
        @portfolios = Portfolio.where(user_id: current_user.id)
        render :index
    end

    def create
        @portfolio = current_user.portfolios.new(portfolio_params)
        if @portfolio.save
            render :index
        else
            render json: @portfolio.errors.full_messages
        end
    end

    private

    def portfolio_params
        params.require(:portfolio).permit(:portfolio_name)
    end
    
end