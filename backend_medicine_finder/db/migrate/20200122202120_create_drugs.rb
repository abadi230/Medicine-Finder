class CreateDrugs < ActiveRecord::Migration[6.0]
  def change
    create_table :drugs do |t|
      t.string :name
      t.string :active_ingredient
      t.string :strength
      t.string :image

      t.timestamps
    end
  end
end
