import {
	Model,
	Table,
	Column,
	DataType,
	BelongsTo,
	ForeignKey,
	DefaultScope
} from 'sequelize-typescript'
import User from './user'

@DefaultScope({ attributes: { exclude: ['userId'] } })
@Table
export default class Note extends Model<Note> {
	@Column(DataType.TEXT)
	text?: string

	@ForeignKey(() => User)
	@Column
	userId?: number

	@BelongsTo(() => User)
	user?: User
}
