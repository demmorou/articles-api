import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('articles', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('category').notNullable();
    table.string('title').notNullable();
    table.text('summary').notNullable();
    table.text('first_paragraph').notNullable();
    table.text('body').notNullable();
    table.uuid('author_id').references('id').inTable('authors');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('articles');
}
