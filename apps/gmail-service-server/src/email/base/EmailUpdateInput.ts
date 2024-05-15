/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { LabelUpdateManyWithoutEmailsInput } from "./LabelUpdateManyWithoutEmailsInput";
import { Type } from "class-transformer";
import { ThreadWhereUniqueInput } from "../../thread/base/ThreadWhereUniqueInput";

@InputType()
class EmailUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  body?: string | null;

  @ApiProperty({
    required: false,
    type: () => LabelUpdateManyWithoutEmailsInput,
  })
  @ValidateNested()
  @Type(() => LabelUpdateManyWithoutEmailsInput)
  @IsOptional()
  @Field(() => LabelUpdateManyWithoutEmailsInput, {
    nullable: true,
  })
  labels?: LabelUpdateManyWithoutEmailsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recipients?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sender?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subject?: string | null;

  @ApiProperty({
    required: false,
    type: () => ThreadWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ThreadWhereUniqueInput)
  @IsOptional()
  @Field(() => ThreadWhereUniqueInput, {
    nullable: true,
  })
  thread?: ThreadWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { EmailUpdateInput as EmailUpdateInput };
