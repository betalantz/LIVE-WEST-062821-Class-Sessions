class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :name
      t.integer :votes
      t.string :image

      t.timestamps
    end
  end
end
