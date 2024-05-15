/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LabelWhereUniqueInput } from "../../label/base/LabelWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LabelUpdateManyWithoutEmailsInput {
  @Field(() => [LabelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LabelWhereUniqueInput],
  })
  connect?: Array<LabelWhereUniqueInput>;

  @Field(() => [LabelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LabelWhereUniqueInput],
  })
  disconnect?: Array<LabelWhereUniqueInput>;

  @Field(() => [LabelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LabelWhereUniqueInput],
  })
  set?: Array<LabelWhereUniqueInput>;
}

export { LabelUpdateManyWithoutEmailsInput as LabelUpdateManyWithoutEmailsInput };
