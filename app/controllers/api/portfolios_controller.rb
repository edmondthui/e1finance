class Api::PortfoliosController < ApplicationController

    def index
        @portfolios = Portfolio.where(user_id: current_user.id).includes(:pies)
        render :index
    end

    def create
        @portfolio = current_user.portfolios.new(portfolio_params)
        if @portfolio.save
            render :show
        else
            render json: @portfolio.errors.full_messages
        end
    end

    def show
        @portfolio = current_user.portfolios.find(params[:portfolio][:id])
        if @portfolio
            render :show
        else
            render json: ["Portfolio not found."], status: 404
        end
    end

    def destroy
        @portfolio = current_user.portfolios.find(params[:id])
        if @portfolio.destroy
            render :show
        else
            render json: ["Error, you weren't supposed to do that."], status: 404
        end
    end

    private

    def portfolio_params
        params.require(:portfolio).permit(:portfolio_name)
    end
    
end