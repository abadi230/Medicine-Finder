class Api::V1::DrugPharmaciesController < ApplicationController
    before_action :set_drug_pharmacis, only: [:show, :update, :destroy]

    def index
        drug_pharmacis = DrugPharmacy.all 
        render json: drug_pharmacis, status: 200
    end

    # def new
    #     @pharmacy = Pharmacy.find([:pharmacy_id])
    #     @drug = Drug.find([:drug_id])

    # end

    def create
        drug_pharmacis = DrugPharmacy.create(drug_pharmacis_params)
        render json: drug_pharmacis, status: 201
    end

    def update
        @drug_pharmacis.update(drug_pharmacis_params)
        render json: @drug_pharmacis, status: 200
    end

    def destroy
        drug_pharmacis_id = @drug_pharmacis.id
        @drug_pharmacis.destroy
        render json: {message: 'Zap! Drug pharmacies Deleted', drug_pharmacis_id: drug_pharmacis_id}
    end

    def show 
        render json: @drug_pharmacis, status: 200
    end
    
    private
    def drug_pharmacis_params
        params.permit(:price, :quantity, :drug_id, :pharmacy_id)
    end

    def set_drug_pharmacis
        @drug_pharmacis = DrugPharmacy.find(param[:id])
    end

end
