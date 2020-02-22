class DrugPharmaciesController < ApplicationController
  before_action :set_drug_pharmacy, only: [:show, :update, :destroy]

  # GET /drug_pharmacies
  def index
    @drug_pharmacies = DrugPharmacy.all

    render json: @drug_pharmacies
  end

  # GET /drug_pharmacies/1
  def show
    render json: @drug_pharmacy
  end

  # POST /drug_pharmacies
  def create
    @drug_pharmacy = DrugPharmacy.new(drug_pharmacy_params)

    if @drug_pharmacy.save
      render json: @drug_pharmacy, status: :created, location: @drug_pharmacy
    else
      render json: @drug_pharmacy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /drug_pharmacies/1
  def update
    if @drug_pharmacy.update(drug_pharmacy_params)
      render json: @drug_pharmacy
    else
      render json: @drug_pharmacy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /drug_pharmacies/1
  def destroy
    drug_pharmacyId = @drug_pharmacy.id
    @drug_pharmacy.destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_drug_pharmacy
      @drug_pharmacy = DrugPharmacy.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def drug_pharmacy_params
      params.permit(:drug, :pharmacy, :price, :quantity)
    end
end
