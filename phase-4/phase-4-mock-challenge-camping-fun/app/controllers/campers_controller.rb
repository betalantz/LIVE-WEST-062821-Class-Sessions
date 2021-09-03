class CampersController < ApplicationController
    

    def index
        render json: Camper.all
    end

    def show
        camper = Camper.find(params[:id])
        render json: camper
    end

    def create
        camper = Camper.create!(camper_params)
        render json: camper, status: :created
    end

    private

    def camper_params
        params.permit(:name, :age)
    end

    
    def render_not_found_response
        render json: { error: "Camper not found" }, status: :not_found
    end
end
