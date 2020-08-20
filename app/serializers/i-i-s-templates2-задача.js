import { Serializer as ЗадачаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-templates2-задача';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗадачаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
