class ParksController < ApplicationController

    def index
        parks = Park.all.order(:id)
        render json: parks
    end

    def create
        park = Park.create(park_params)
        render json: park
    end

    def update
        park = Park.find(params[:id])
        park.update(park_params)
        render json: park
    end

    private

    def park_params
        params.permit(:name, :image, :votes)
    end
end
