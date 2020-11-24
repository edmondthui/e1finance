class Api::ActivitiesController < ApplicationController


    def index
        @activities = current_user.activities
        render :index
    end

    def create
        @activity = Activity.new(activity_params)
        if @activity.save
            render :show
        else
            render json: ["Something went wrong please try again"], status: 422
        end
    end

    private

    def activity_params
        params.require(:activity).permit(:activity, :name, :value, :user_id)
    end

end