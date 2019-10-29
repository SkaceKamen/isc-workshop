import {
	Table,
	Column,
	Model,
	DataType,
	Unique,
	DefaultScope,
	HasMany
} from 'sequelize-typescript'
import Note from './note'

@DefaultScope(() => ({
	attributes: {
		exclude: ['password']
	}
}))
@Table
export default class User extends Model<User> {
	@Unique
	@Column(DataType.CHAR)
	nickname?: string

	@Unique
	@Column(DataType.CHAR)
	email?: string

	@Column
	password?: string

	@HasMany(() => Note)
	notes?: Note[]
}
