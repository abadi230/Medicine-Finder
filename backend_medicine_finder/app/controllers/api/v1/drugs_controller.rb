class Api::V1::DrugsController < ApplicationController
    before_action :set_drug, only: [:show, :update, :destroy]

    def index
        drugs = Drug.all 
        render json: drugs, status: 200
    end
    
    def create
        drug = Drug.create(drug_params)
        render json: drug, status: 201
    end
    
    def update
        @drug.update(drug_params)
        render json: @drug, status: 200
    end

    def destroy
        drugId = @drug.id
        @drug.destroy
        render json: {message: 'Zap! Drug deleted', drugId:drugId}
    end

    def show
        render json: @drug, status: 200
    end

    private
    def drug_params
        params.permit(:name, :active_ingredient, :strength, :image)
    end
    
    def set_drug
        @drug = Drog.find(params[:id])
    end 

end